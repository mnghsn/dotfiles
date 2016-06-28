#!/bin/bash
#
# Installs cURL.

source ../lib/utils.sh

if is_exists 'curl'; then
  exit 0
fi

case "$(get_os)" in
  'linux')
    if is_exists 'apt'; then
      sudo apt install curl -yqq
    elif is_exists 'apt-get'; then
      sudo apt-get install curl -yqq
    elif is_exists 'dnf'; then
      sudo dnf install curl -yq
    elif is_exists 'yum'; then
      sudo yum install curl -yq
    elif is_exists 'pacman'; then
      sudo pacman -S curl --noconfirm
    else
      die 'ERROR: Either APT, DNF or YUM is required.'
    fi
    ;;
  'mac')
    if is_exists 'brew'; then
      brew install curl
    elif is_exists 'port'; then
      sudo port install curl
    else
      die 'ERROR: Either Homebrew or MacPorts is required.'
    fi
    ;;
  *)
    die 'ERROR: This script does not support your system.'
    ;;
esac

exit $?

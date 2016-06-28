#!/bin/bash
#
# Installs Wget.

source ../lib/utils.sh

if is_exists 'wget'; then
  exit 0
fi

case "$(get_os)" in
  'linux')
    if is_exists 'apt'; then
      sudo apt install wget -yqq
    elif is_exists 'apt-get'; then
      sudo apt-get install wget -yqq
    elif is_exists 'dnf'; then
      sudo dnf install wget -yq
    elif is_exists 'yum'; then
      sudo yum install wget -yq
    elif is_exists 'pacman'; then
      sudo pacman -S wget --noconfirm
    else
      die 'ERROR: Either APT, DNF or YUM is required.'
    fi
    ;;
  'mac')
    if is_exists 'brew'; then
      brew install wget
    elif is_exists 'port'; then
      sudo port install wget
    else
      die 'ERROR: Either Homebrew or MacPorts is required.'
    fi
    ;;
  *)
    die 'ERROR: This script does not support your system.'
    ;;
esac

exit $?

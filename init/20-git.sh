#!/bin/bash
#
# Installs Git.

source ../lib/utils.sh

if is_exists 'git'; then
  exit 0
fi

case "$(get_os)" in
  'linux')
    if is_exists 'apt'; then
      sudo apt install git -yqq
    elif is_exists 'apt-get'; then
      sudo apt-get install git -yqq
    elif is_exists 'dnf'; then
      sudo dnf install git -yq
    elif is_exists 'yum'; then
      sudo yum install git -yq
    elif is_exists 'pacman'; then
      sudo pacman -S git --noconfirm
    else
      die 'ERROR: Either APT, DNF or YUM is required.'
    fi
    ;;
  'mac')
    if is_exists 'brew'; then
      brew install git
    elif is_exists 'port'; then
      sudo port install git
    else
      die 'ERROR: Either Homebrew or MacPorts is required.'
    fi
    ;;
  *)
    die 'ERROR: This script does not support your system.'
    ;;
esac

exit $?

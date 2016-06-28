#!/bin/bash
#
# Installs Vim.

source ../lib/utils.sh

if is_exists 'vim'; then
  exit 0
fi

case "$(get_os)" in
  'linux')
    if is_exists 'apt'; then
      sudo apt install vim -yqq
    elif is_exists 'apt-get'; then
      sudo apt-get install vim -yqq
    elif is_exists 'dnf'; then
      sudo dnf install vim -yq
    elif is_exists 'yum'; then
      sudo yum install vim -yq
    elif is_exists 'pacman'; then
      sudo pacman -S vim --noconfirm
    else
      die 'ERROR: Either APT, DNF or YUM is required.'
    fi
    ;;
  'mac')
    if is_exists 'brew'; then
      brew install vim
    elif is_exists 'port'; then
      sudo port install vim
    else
      die 'ERROR: Either Homebrew or MacPorts is required.'
    fi
    ;;
  *)
    die 'ERROR: This script does not support your system.'
    ;;
esac

exit $?

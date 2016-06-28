#!/bin/bash
#
# Installs Git.

source ../lib/utils.sh

if is_exists 'tree'; then
  exit 0
fi

case "$(get_os)" in
  'linux')
    if is_exists 'apt'; then
      sudo apt install tree -yqq
    elif is_exists 'apt-get'; then
      sudo apt-get install tree -yqq
    elif is_exists 'dnf'; then
      sudo dnf install tree -yq
    elif is_exists 'yum'; then
      sudo yum install tree -yq
    elif is_exists 'pacman'; then
      sudo pacman -S tree --noconfirm
    else
      die 'ERROR: Either APT, DNF or YUM is required.'
    fi
    ;;
  'mac')
    if is_exists 'brew'; then
      brew install tree
    elif is_exists 'port'; then
      sudo port install tree
    else
      die 'ERROR: Either Homebrew or MacPorts is required.'
    fi
    ;;
  *)
    die 'ERROR: This script does not support your system.'
    ;;
esac

exit $?

#!/bin/bash
#
# Installs Homebrew for Mac.

source ../lib/utils.sh

if ! is_mac; then
  exit 0
fi

if is_exists 'brew'; then
  exit 0
fi

if ! is_exists 'ruby'; then
  die 'Ruby must be installed first.'
fi

ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

if is_exists 'brew'; then
  brew doctor
else
  die 'Failed to install Homebrew.'
fi

exit $?

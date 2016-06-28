#!/bin/bash
#
# Defines functions for `dotfiles list` command.

#######################################
# Lists all dotfiles.
#######################################
list_dotfiles() {
  e_header 'List dotfiles'

  builtin cd "${DOTFILES_HOME}"

  if is_exists 'tree'; then
    tree -a --noreport
  else
    find . | sort | sed '1d;s/^\.//;s/\/\([^/]*\)$/|-- \1/;s/\/[^/|]*/|  /g'
  fi
}

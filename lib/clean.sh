#!/bin/bash
#
# Defines functions for `dotfiles clean` command.

#######################################
# Restores backup file if exists.
#######################################
restore_file() {
  if [[ -f "${DOTFILES_BACKUP}/$1.bak" ]]; then
    mv -fn "${DOTFILES_BACKUP}/$1.bak" "${HOME}/$1"
  fi
}

#######################################
# Removes the linked file.
#######################################
remove_link() {
  if [[ -L "${HOME}/$1" ]]; then
    rm -rf "${HOME:?}/$1"
  fi
}

#######################################
# Remove the parent directory if empty.
#######################################
remove_empty_directory() {
  if [[ -d "${HOME}/$(dirname "$1")" ]]; then
    find "${HOME}/$(dirname "$1")" -type d -empty -delete
  fi
}

#######################################
# Removes linked dotfiles and restores their backup.
#######################################
clean_dotfiles() {
  e_header 'Clean dotfiles'

  builtin cd "${DOTFILES_HOME}"

  for file in $(find . -type f | sort); do
    file=${file/.\/}

    remove_link "${file}" &&
    restore_file "${file}" &&
    remove_empty_directory "${file}"

    if is_success; then
      e_success "Done: ${file}"
    else
      e_error "Failed: ${file}"
    fi
  done
}

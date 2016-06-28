#!/bin/bash
#
# Defines functions for `dotfiles deploy` command.

#######################################
# Creates a link target for dotfiles.
#######################################
link_file() {
  mkdir -p "$(dirname "${HOME}/$1")" &&
  ln -sfn "${DOTFILES_HOME}/$1" "${HOME}/$1"
}

#######################################
# Backups the exist file.
#######################################
backup_file() {
  if [[ -f "${HOME}/$1" ]] && [[ ! -L "${HOME}/$1" ]]; then
    mkdir -p "${DOTFILES_BACKUP}/$(dirname "$1")" &&
    mv -fn "${HOME}/$1" "${DOTFILES_BACKUP}/$1.bak"
  fi
}

#######################################
# Links dotfiles to home directory.
#######################################
deploy_dotfiles() {
  e_header 'Deploy dotfiles'

  builtin cd "${DOTFILES_HOME}"

  for file in $(find . -type f | sort); do
    file=${file/.\/}

    backup_file "${file}" &&
    link_file "${file}"

    if is_success; then
      e_success "Done: ${file}"
    else
      e_error "Failed: ${file}"
    fi
  done
}

#!/bin/bash
#
# Defines functions for `dotfiles init` command.

#######################################
# Installs software packages and setups environment settings.
#######################################
init_dotfiles() {
  e_header 'Initialize dotfiles'

  builtin cd "${DOTFILES_PATH}/init"

  # Ask for the administrator password upfront.
  sudo -v

  # Update existing `sudo` time stamp until this script finished.
  while true; do
    sudo -n true
    sleep 60;
    kill -0 "$$" || exit
  done 2>/dev/null &

  for file in $(find . -type f -name '*.sh' | sort); do
    e_arrow "$(basename "${file}")"

    bash "${file}"

    if is_success; then
      e_success "Done: $(basename "${file}")"
    else
      e_error "Failed: $(basename "${file}")"
    fi
  done
}

#!/bin/bash
#
# Runs ShellCheck.

source ../lib/utils.sh

ERR=0
export ERR

#######################################
# Runs ShellCheck to lint shell scripts.
#######################################
unit_shellcheck() {
  if ! is_exists 'shellcheck'; then
    e_warning 'ShellCheck must be installed first.'
    return 1
  fi

  files=()
  files+=("${DOTFILES_PATH}"/bin/*)
  files+=("${DOTFILES_PATH}"/init/*)
  files+=("${DOTFILES_PATH}"/lib/*)
  files+=("${DOTFILES_PATH}"/test/*)

  for file in "${file[@]}"; do
    shellcheck "${file}"
    if is_success; then
      e_success "Passed: ${file}"
    else
      e_error "Error: ${file}"
      ERR=1
    fi
  done
}

# Run test tasks.
unit_shellcheck

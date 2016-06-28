#!/bin/bash
#
# Defines functions for `dotfiles test` command.

ERR=0
export ERR

#######################################
# Tests dotfiles and checks shell scripts.
#######################################
test_dotfiles() {
  e_header 'Test dotfiles'

  builtin cd "${DOTFILES_PATH}/test"

  for file in $(find . -type f -name '*.sh' | sort); do
    e_arrow "$(basename "${file}")"
    bash "${file}" || ERR=1
  done

  if [[ $ERR -eq 0 ]]; then
    e_success 'All tests passed.'
    return 0
  else
    e_error 'One or more tests failed.'
    return 1
  fi
}

#!/bin/bash
#
# Tests whether dotfiles is linked correctly.

source ../lib/utils.sh

ERR=0
export ERR

#######################################
# Emulates GNU readlink -f option.
#######################################
readlink() {
  if [[ $# -eq 0 ]]; then
    return 1
  fi

  local file phys result

  # Change directory and reset file.
  file="$1"
  builtin cd "$(dirname "${file}")"
  file="$(basename "${file}")"

  # Readlink recursively.
  while [[ -L "${file}" ]]; do
    file="$(command readlink "${file}")"
    builtin cd "$(dirname "${file}")"
    file="$(basename "${file}")"
  done

  # Get read pwd.
  phys="$(pwd -P)"
  result="${phys}/${file}"

  echo "${result}"
}

#######################################
# Unit Test: Deploys dotfiles.
#######################################
unit_deploy() {
  builtin cd "${DOTFILES_PATH}"

  bin/dotfiles deploy >/dev/null

  if is_success; then
    e_success 'Deploy passed.'
    return 0
  else
    e_error 'Deploy failed.'
    return 1
  fi
}

#######################################
# Unit Test: Tests whether dotfiles are linked correctly.
#######################################
unit_link() {
  builtin cd "${DOTFILES_HOME}"

  for file in $(find . -type f | sort); do
    file=${file/.\/}
    if [[ "$(readlink "${HOME}/${file}")" = "${DOTFILES_HOME}/${file}" ]]; then
      e_success "Linked: ${file}"
    else
      e_error "Failed to link: ${file}"
      ERR=1
    fi
  done

  if [[ $ERR -eq 0 ]]; then
    e_success 'Linked passed.'
    return 0
  else
    e_error 'Linked failed.'
    return 1
  fi
}

# Run test tasks.
unit_deploy
unit_link

#!/bin/bash
#
# Defines utility functions.

#######################################
# Prints a blank line.
#######################################
e_newline() {
  printf '\n'
}

#######################################
# Prints a normal text message.
#######################################
e_normal() {
  printf "\033[0m%s\033[0m\n" "$@"
}

#######################################
# Prints a header text message.
#######################################
e_header() {
  printf "\033[1;37m%s\033[0m\n" "$@"
}

#######################################
# Prints a success text message.
#######################################
e_success() {
  printf "\033[0;32m%s\033[0m %s\n" "✔" "$@"
}

#######################################
# Prints a warning text message.
#######################################
e_warning() {
  printf "\033[0;33m%s\033[0m %s\n" "❗" "$@"
}

#######################################
# Prints an error text message.
#######################################
e_error() {
  printf "\033[0;31m%s\033[0m %s\n" "✖" "$@"
}

#######################################
# Prints an arrow text message.
#######################################
e_arrow() {
  printf "\033[0;36m%s\033[0m %s\n" "➡" "$@"
}

#######################################
# Indents a text message.
#######################################
e_indent() {
  for ((i=0; i<${1:-2}; i++)); do
    echo ' ' | tr -d '\n'
  done
  if [[ -n "$2" ]]; then
    echo "$2"
  else
    cat <&0
  fi
}

#######################################
# Exits the script and returns an exit code.
#######################################
die() {
  e_error "$1" 1>&2
  exit "${2:-1}"
}

#######################################
# Test whether Bash is running.
#######################################
is_bash() {
  [[ -n "${BASH_VERSION}" ]];
}

#######################################
# Tests whether Zsh is running.
#######################################
is_zsh() {
  [[ -n "${ZSH_VERSION}" ]];
}

#######################################
# Returns the OS name in lowercase letters.
#######################################
os_type() {
  # shellcheck disable=SC2119
  uname | lower
}

#######################################
# Exports PLATFORM variable.
#######################################
export PLATFORM
os_detect() {
  case "$(os_type)" in
    *'linux'*)  PLATFORM='linux'    ;;
    *'darwin'*) PLATFORM='mac'      ;;
    *'bsd'*)    PLATFORM='bsd'      ;;
    *)          PLATFORM='unknown'  ;;
  esac
}

#######################################
# Tests whether OS is GNU/Linux.
#######################################
is_linux() {
  os_detect
  if [[ "${PLATFORM}" = 'linux' ]]; then
    return 0
  fi
  return 1
}

#######################################
# Tests whether OS is Macintosh.
#######################################
is_mac() {
  os_detect
  if [[ "${PLATFORM}" = 'mac' ]]; then
    return 0
  fi
  return 1
}
alias is_osx=is_mac

#######################################
# Tests whether OS is FreeBSD.
#######################################
is_bsd() {
  os_detect
  if [[ "${PLATFORM}" = 'bsd' ]]; then
    return 0
  fi
  return 1
}

#######################################
# Returns the OS name.
#######################################
get_os() {
  local os
  for os in linux mac bsd; do
    if is_$os; then
      echo "$os"
    fi
  done
}

#######################################
# Tests whether a command is exists.
#######################################
is_exists() {
  if [[ $(type -P "$1") ]]; then
    return 0
  fi
  return 1
}

#######################################
# Tests whether the working directory is a git repository.
#######################################
is_git_repo() {
  git rev-parse --is-inside-work-tree &>/dev/null
  return $?
}

#######################################
# Tests whether the latest command succeeded.
#######################################
is_success() {
  if [[ $? -eq 0 ]]; then
    return 0
  fi
  return 1
}

#######################################
# Converts a string to lowercase letters.
#######################################
# shellcheck disable=SC2120
lower() {
  if [[ $# -eq 0 ]]; then
    cat <&0
  elif [[ $# -eq 1 ]]; then
    if [[ -f "$1" ]] || [[ -r "$1" ]]; then
      cat "$1"
    else
      echo "$1"
    fi
  else
    return 1
  fi | tr '[:upper:]' '[:lower:]'
}

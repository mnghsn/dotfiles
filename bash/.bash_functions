#!/bin/bash
#
# ~/.bash_functions

#######################################
# Lists all defined functions.
#######################################
list_functions() {
  declare -F | grep -v '\-f _'
}

#######################################
# Creates a new directory and then
# enters it.
#######################################
mkd() {
  mkdir -p "$@" && cd "$_"
}

#######################################
# Converts `CRLF` (Windows) line
# endings to `LF` (Unix).
#######################################
crlf2lf() {
  if [[ $# -eq 0 ]]; then
    cat <&0
  elif [[ $# -eq 1 ]]; then
    if [[ -f "${1}" ]] && [[ -r "${1}" ]]; then
      cat "${1}"
    else
      echo "${1}"
    fi
  else
    return 1
  fi | sed -e "s/$(printf '\r')//g"
}

#######################################
# Converts `LF` (Unix) line endings to
# `CRLF` (Windows).
#######################################
lf2crlf() {
  if [[ $# -eq 0 ]]; then
    cat <&0
  elif [[ $# -eq 1 ]]; then
    if [[ -f "${1}" ]] && [[ -r "${1}" ]]; then
      cat "${1}"
    else
      echo "${1}"
    fi
  else
    return 1
  fi | sed -e "s/$/$(printf '\r')/g"
}

#######################################
# Runs `git pull` on every directory
# within the current directory.
#######################################
git-updateall() {
  find . \
    -maxdepth 1 \
    ! -path . \
    -type d \
    -print \
    -execdir git --git-dir={}/.git --work-tree="${PWD}/{}" pull \;
}

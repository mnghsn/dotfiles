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
  sed -i "s/$(printf '\r')//g" "${1}"
}

#######################################
# Converts `LF` (Unix) line endings to
# `CRLF` (Windows).
#######################################
lf2crlf() {
  sed -i "s/$/$(printf '\r')/g" "${1}"
}

#######################################
# Starts an HTTP server from a
# directory, optionally specifying the
# port.
#######################################
pyserver() {
  local port="${1:-8000}"

  # Redefining the default content-type to text/plain instead of the default
  # application/octet-stream allows "unknown" files to be viewable in-browser
  # as text instead of being downloaded.
  python -c $'
import SimpleHTTPServer
SimpleHTTPServer.SimpleHTTPRequestHandler.extensions_map[""] = "text/plain"
SimpleHTTPServer.test()
' "${port}"
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

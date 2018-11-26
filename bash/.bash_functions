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
# Starts an HTTP server from a
# directory, optionally specifying the
# port.
#######################################
pyserver() {
  local port="${1:-8000}"

  python -c '
import sys

try:
    # Python 2
    import SimpleHTTPServer as server
    import SocketServer as socketserver
except ImportError:
    # Python 3
    import http.server as server
    import socketserver

handler = server.SimpleHTTPRequestHandler
map = handler.extensions_map
port = int(sys.argv[1])

# Redefining the default content-type to text/plain instead of the default
# application/octet-stream allows "unknown" files to be viewable in-browser
# as text instead of being downloaded.
map[""] = "text/plain"

# Serve everything as UTF-8.
# (Although not technically correct, this does not break anything for binary
# files.)
for key, value in map.items():
    map[key] = value + "; charset=utf-8"

# Create but do not automatically bind socket.
# (the `allow_reuse_address` option needs to be set first)
httpd = socketserver.ThreadingTCPServer(("localhost", port), handler, False)

# Prevent "cannot bind to address" errors on restart.
# https://brokenbad.com/address-reuse-in-pythons-socketserver/
httpd.allow_reuse_address = True

# Manually bind socket and start the server.
httpd.server_bind()
httpd.server_activate()
print("Serving content on port:", port)
httpd.serve_forever()

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

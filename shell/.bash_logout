#!/bin/bash
#
# ~/.bash_logout

# Clear console on exit.
if [[ "${SHLVL}" -eq 1 ]]; then
  if command -v clear &> /dev/null; then
    clear
  fi
fi

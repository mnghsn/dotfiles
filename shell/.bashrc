#!/bin/bash
#
# ~/.bashrc

# If not running interactively, don't do anything.
case $- in
  *i*) ;;
    *) return;;
esac

# Load Bash configuration files.
declare -a bash_files=(
  "${HOME}/.bash_options"
  "${HOME}/.bash_exports"
  "${HOME}/.bash_aliases"
  "${HOME}/.bash_functions"
  "${HOME}/.bash_prompt"
  "${HOME}/.bash_paths"
  "${HOME}/.bash_misc"
  "${HOME}/.bash_completion"
  '/usr/share/bash-completion/bash_completion'
  '/etc/bash_completion'
  "${HOME}/.bashrc.local"
)

for index in ${!bash_files[*]}; do
  if [[ -r "${bash_files[$index]}" ]]; then
    source "${bash_files[$index]}"
  fi
done

unset bash_files

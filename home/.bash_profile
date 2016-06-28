#!/usr/bin/env bash
#
# ~/.bash_profile

load_dotfiles() {
  declare -a files=(
    $HOME/.bash_options
    $HOME/.bash_exports
    $HOME/.bash_aliases
    $HOME/.bash_functions
    $HOME/.bash_prompt
    $HOME/.bash_paths
    $HOME/.bash_completion
    $HOME/.bash_profile.local
  )

  for index in ${!files[*]}
  do
    if [[ -r ${files[$index]} ]]; then
      source ${files[$index]}
    fi
  done
}

load_dotfiles
unset load_dotfiles

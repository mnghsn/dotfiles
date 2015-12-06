# ~/.bash_profile

load_dotfiles() {
  declare -a files=(
    $HOME/.dotfiles/bash/.bash_options
    $HOME/.dotfiles/bash/.bash_exports
    $HOME/.dotfiles/bash/.bash_aliases
    $HOME/.dotfiles/bash/.bash_functions
    $HOME/.dotfiles/bash/.bash_prompt
    $HOME/.dotfiles/bash/.bash_paths
    $HOME/.dotfiles/bash/.bash_completion
    $HOME/.bash_profile.user
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

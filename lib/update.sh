#!/bin/bash
#
# Defines functions for `dotfiles update` command.

#######################################
# Fetches latest dotfiles from the remote repository.
#######################################
update_dotfiles() {
  e_header 'Update dotfiles'

  builtin cd "${DOTFILES_PATH}"

  if ! is_exists 'git'; then
    die 'Git must be installed first.'
  fi

  # Initialize git repository.
  if ! is_git_repo "${DOTFILES_PATH}"; then
    git init
    git remote add origin "${DOTFILES_GIT_URL}"
  fi

  # Unstage all changed files.
  git reset HEAD

  # Remove untracked files.
  git clean -fd

  # Pull git repository.
  git pull --rebase origin master

  # Update git submodules.
  git submodule init
  git submodule update
  git submodule foreach git pull origin master
}

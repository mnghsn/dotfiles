#!/bin/bash
#
# Defines functions for `dotfiles install` command.

#######################################
# Installs dotfiles.
#######################################
install_dotfiles() {
  e_header 'Install dotfiles'

  update_dotfiles &&
  deploy_dotfiles &&
  init_dotfiles
}

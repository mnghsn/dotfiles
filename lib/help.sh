#!/bin/bash
#
# Defines functions for `dotfiles help` command.

#######################################
# Prints help message.
#######################################
e_help() {
  echo "Usage: $(basename "$0") <command>"
  echo 'Commands:'
  echo '  help      Print help message'
  echo '  list      List all dotfiles'
  echo '  deploy    Link dotfiles to home directory'
  echo '  init      Install software packages and setup environment settings'
  echo '  update    Fetch latest dotfiles from the remote repository'
  echo '  install   Install dotfiles (Run "update", "deploy" and "init" command)'
  echo '  clean     Remove linked dotfiles and restore their backup'
  echo '  test      Test dotfiles and check shell scripts'
}

#!/bin/bash
#
# ~/.bash_functions

#######################################
# Creates a new directory and enter it.
#######################################
mkd() {
  mkdir -p "$@" && cd "$_"
}

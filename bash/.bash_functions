#!/bin/bash
#
# ~/.bash_functions

#######################################
# Creates a new directory and then
# enters it.
#######################################
mkd() {
  mkdir -p "$@" && cd "$_"
}

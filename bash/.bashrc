#!/bin/bash
#
# ~/.bashrc

# If not running interactively, don't do anything.
[ -z "$PS1" ] && return

# ------------------------------------------------------------------------------
# Options
# ------------------------------------------------------------------------------

set -b                              # Cause output from background processes to be output right away.
set -o notify                       # Notify when jobs running in background terminate.

shopt -s cdable_vars                # Disallow write access to terminal.
shopt -s cdspell                    # Auto correct typos in path names when using `cd`.
shopt -s checkhash
shopt -s checkwinsize               # Update the window size after each command.
shopt -s cmdhist                    # Save multi-line commands in the history as a single line.
shopt -s histappend                 # Append to bash history file.
shopt -s histreedit
shopt -s histverify
shopt -s mailwarn                   # Keep an eye on the mail file (access time).
shopt -s nocaseglob                 # Case-insensitive globbing.
shopt -s no_empty_cmd_completion    # Disable empty completion (bash >= 2.40 only).
shopt -s sourcepath

ulimit -S -c 0                      # Disable coredumps.
unset MAILCHECK                     # Disable incoming mail warning.

# ------------------------------------------------------------------------------
# Exports
# ------------------------------------------------------------------------------

export EDITOR='vim'                           # Make vim the default editor.
export HISTCONTROL=ignoreboth:erasedups       # Ignore spaced commands and prevent storing duplicate commands.
export HISTFILESIZE=10000                     # Increase the maximum number of lines contained in history file (Default is 500).
export HISTSIZE=10000                         # Increase the maximum number of commands to remember (Default is 500).
export HISTIGNORE='&:bg:fg:ll:h'
export HISTTIMEFORMAT="[%Y-%m-%d %H:%M:%S] "  # Make history shows the date for each command.
export PAGER='less -e'

# Make new shells get the history lines from all previous shells.
if [[ ! -f "${HOME}/.bash_history" ]]; then touch "${HOME}/.bash_history"; fi
export PROMPT_COMMAND="history -a; ${PROMPT_COMMAND}"

# ------------------------------------------------------------------------------
# Aliases
# ------------------------------------------------------------------------------

# Allow aliases to be with sudo.
alias sudo='sudo '

# Easier navigation.
alias ..='cd ..'
alias ...='cd ...'
alias ~='cd ~'
alias -- -='cd -'

# Enable color support.
if [[ -x /usr/bin/dircolors ]]; then
  test -r ~/.dircolors && eval "$(dircolors -b ~/.dircolors)" || eval "$(dircolors -b)"
  alias ls='ls --color=auto'
  alias grep='grep --color=auto'
  alias fgrep='fgrep --color=auto'
  alias egrep='egrep --color=auto'
fi

# List directory.
alias ls='ls -CF'
alias la='ls -A --group-directories-first'
alias ll='ls -alF --group-directories-first'

# Clear screen.
alias cls='clear'

# ------------------------------------------------------------------------------
# Prompt
# ------------------------------------------------------------------------------

prompt_git() {
  local s=''
  local branch_name=''

  # Check if the current directory is in a git repository.
  if [[ $(git rev-parse --is-inside-work-tree &>/dev/null; printf "%s" $?) == 0 ]]; then
    # Check if the current directory is in .git before running git checks.
    if [[ "$(git rev-parse --is-inside-git-dir 2> /dev/null)" == "false" ]]; then
      # Ensure index is up to date.
      git update-index --really-refresh  -q &>/dev/null

      # Check for uncommitted changes.
      if ! $(git diff --quiet --ignore-submodules --cached); then
        s="${s}+";
      fi
      # Check for unstaged changes.
      if ! $(git diff-files --quiet --ignore-submodules --); then
        s="${s}!";
      fi
      # Check for untracked files.
      if [ -n "$(git ls-files --others --exclude-standard)" ]; then
        s="${s}?";
      fi
      # Check for stashed files.
      if $(git rev-parse --verify refs/stash &>/dev/null); then
        s="${s}$";
      fi
    fi

    # Get the short symbolic ref.
    # If HEAD is not a symbolic ref, get the short SHA. Otherwise do nothing.
    branch_name="$(git symbolic-ref --quiet --short HEAD 2> /dev/null || \
                   git rev-parse --short HEAD 2> /dev/null || \
                   printf "(unknown)")"

    [[ -n "${s}" ]] && s=" ${s}"

    printf "%s" "$1${branch_name}${s}$2"

  else
    return
  fi
}

set_prompts() {
  local text_black="\033[0;30m"
  local text_red="\033[0;31m"
  local text_green="\033[0;32m"
  local text_yellow="\033[0;33m"
  local text_blue="\033[0;34m"
  local text_purple="\033[0;35m"
  local text_cyan="\033[0;36m"
  local text_white="\033[0;37m"

  local bold_black="\033[1;30m"
  local bold_red="\033[1;31m"
  local bold_green="\033[1;32m"
  local bold_yellow="\033[1;33m"
  local bold_blue="\033[1;34m"
  local bold_purple="\033[1;35m"
  local bold_cyan="\033[1;36m"
  local bold_white="\033[1;37m"

  #local underline_black="\033[4;30m"
  #local underline_red="\033[4;31m"
  #local underline_green="\033[4;32m"
  #local underline_yellow="\033[4;33m"
  #local underline_blue="\033[4;34m"
  #local underline_purple="\033[4;35m"
  #local underline_cyan="\033[4;36m"
  #local underline_white="\033[4;37m"

  #local background_black="\033[40m"
  #local background_red="\033[41m"
  #local background_green="\033[42m"
  #local background_yellow="\033[43m"
  #local background_blue="\033[44m"
  #local background_purple="\033[45m"
  #local background_cyan="\033[46m"
  #local background_white="\033[47m"

  local text_reset="\033[0m"

  local name_color=""

  # Check if user is logged in as root.
  if [[ "${USER}" == 'root' ]]; then
    name_color="${bold_red}"
  else
    name_color="${bold_green}"
  fi

  # Set the terminal title to the working directory.
  PS1="\[\033]0;\u@\h:\w\007\]"

  PS1+="\[${name_color}\]\u@\h"     # Username and hostname.
  PS1+="\[${bold_black}\]:"
  PS1+="\[${text_reset}\] "
  PS1+="\[${bold_blue}\]\w"         # Working directory.
  PS1+="\[${text_reset}\]"
  PS1+="\$(prompt_git ' ${bold_purple}[' ']${text_reset}')"$'\n'
  PS1+="\[${bold_blue}\]\\$"
  PS1+="\[${text_reset}\] "

  export PS1
}

set_prompts
unset set_prompts

# ------------------------------------------------------------------------------
# User configuration
# ------------------------------------------------------------------------------

if [[ -r "$HOME/.bashrc.local" ]]; then
  source "$HOME/.bashrc.local"
fi

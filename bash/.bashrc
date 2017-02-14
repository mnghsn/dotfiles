#!/bin/bash
#
# ~/.bashrc

# If not running interactively, don't do anything.
[[ -z "${PS1}" ]] && return

# ------------------------------------------------------------------------------
# Options
# ------------------------------------------------------------------------------

# Cause output from background processes to be output right away.
set -b

# Notify when jobs running in background terminate.
set -o notify

# Disallow write access to terminal.
shopt -s cdable_vars

# Auto correct typos in path names when using `cd`.
shopt -s cdspell

# Refresh program location cache automatically.
shopt -s checkhash

# Update the window size after each command.
shopt -s checkwinsize

# Save multi-line commands in the history as a single line.
shopt -s cmdhist

# Append to bash history file.
shopt -s histappend

# Allow to modify a history substitution.
shopt -s histreedit

# Allow to review a history substitution result by loading the resulting line
# into the editing buffer.
shopt -s histverify

# Keep an eye on the mail file (access time).
shopt -s mailwarn

# Case-insensitive globbing.
shopt -s nocaseglob

# Disable empty completion. (bash >= 2.40)
shopt -s no_empty_cmd_completion

# Make `source` command use the value of PATH to find the directory containing
# the file supplied as an argument.
shopt -s sourcepath

# Disable coredumps.
ulimit -S -c 0

# Disable incoming mail warning.
unset MAILCHECK

# ------------------------------------------------------------------------------
# Exports
# ------------------------------------------------------------------------------

# Make vim the default editor.
export EDITOR='vim'

# Ignore spaced commands and prevent storing duplicated commands.
export HISTCONTROL=ignoreboth:erasedups

# Set the maximum number of lines contained in history file. (Default is 500)
export HISTFILESIZE=10000

# Set the maximum number of commands to remember. (Default is 500)
export HISTSIZE=10000

# Prevent storing some commands to history.
export HISTIGNORE='&:bg:fg:ll:h'

# Make history show the time for each command.
export HISTTIMEFORMAT='%F %T '

# Make new shells get the history lines from all previous shells.
if [[ ! -f "${HOME}/.bash_history" ]]; then
  touch "${HOME}/.bash_history";
fi
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
alias l='ls -CF'
alias la='ls -A --group-directories-first'
alias ll='ls -alF --group-directories-first'

# Clear screen like Windows.
alias cls='clear'

# ------------------------------------------------------------------------------
# Prompt
# ------------------------------------------------------------------------------

prompt_git() {
  local s=''
  local branch_name=''

  # Check if the current directory is in a git repository.
  if [[ $(git rev-parse --is-inside-work-tree &>/dev/null; printf '%s' $?) == 0 ]]; then
    # Check if the current directory is in .git before running git checks.
    if [[ "$(git rev-parse --is-inside-git-dir 2> /dev/null)" == 'false' ]]; then
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
      if [[ -n "$(git ls-files --others --exclude-standard)" ]]; then
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
                   printf '(unknown)')"

    [[ -n "${s}" ]] && s=" ${s}"

    printf '%s' "$1${branch_name}${s}$2"

  else
    return
  fi
}

set_prompts() {
  local black='\033[1;30m'
  local red='\033[1;31m'
  local green='\033[1;32m'
  local yellow='\033[1;33m'
  local blue='\033[1;34m'
  local purple='\033[1;35m'
  local cyan='\033[1;36m'
  local white='\033[1;37m'
  local reset='\033[0m'

  local name_color=''

  # Check if user is logged in as root.
  if [[ "${USER}" == 'root' ]]; then
    name_color="${red}"
  else
    name_color="${green}"
  fi

  # Set the terminal title:
  #   user@hostname: ~/.dotfiles
  PS1='\[\033]0;\u@\h: \w\007\]'

  # Set the prompt:
  #   user@hostname: ~/.dotfiles [master +!?$]
  #   $
  PS1+="\[${name_color}\]\u@\h"
  PS1+="\[${black}\]:"
  PS1+="\[${reset}\] "
  PS1+="\[${blue}\]\w"
  PS1+="\[${reset}\]"
  PS1+="\$(prompt_git ' ${purple}[' ']${reset}')"$'\n'
  PS1+="\[${blue}\]\\$"
  PS1+="\[${reset}\] "

  export PS1
}

set_prompts
unset set_prompts

# ------------------------------------------------------------------------------
# Paths
# ------------------------------------------------------------------------------

# Directories to be prepended to PATH.
declare -a prepend_dirs=(
  '/usr/local/bin'
)

# Directories to be appended to PATH.
declare -a append_dirs=(
  '/usr/bin'
  "${HOME}/bin"
  "${HOME}/.local/bin"
)

# Prepend directories to PATH.
for index in ${!prepend_dirs[*]}; do
  if [[ -d ${prepend_dirs[$index]} ]]; then
    PATH="${prepend_dirs[$index]}:${PATH}"
  fi
done

# Append directories to PATH.
for index in ${!append_dirs[*]}; do
  if [[ -d ${append_dirs[$index]} ]]; then
    PATH="${PATH}:${append_dirs[$index]}"
  fi
done

unset prepend_dirs
unset append_dirs

export PATH

# ------------------------------------------------------------------------------
# Bash Completion
# ------------------------------------------------------------------------------

if [[ -r "/etc/bash_completion" ]]; then
  source "/etc/bash_completion"
fi

# ------------------------------------------------------------------------------
# User configuration
# ------------------------------------------------------------------------------

if [[ -r "${HOME}/.bashrc.local" ]]; then
  source "${HOME}/.bashrc.local"
fi

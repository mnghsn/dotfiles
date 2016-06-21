#!/usr/bin/env bash
#
# Installs or updates dotfiles.

# NOTE: If you want to fork this repository and maintain your own dotfiles, you
# must substitute the following user name and repository name for your own.
DOTFILES_GITHUB_USER="jmlntw"
DOTFILES_GITHUB_REPO="dotfiles"

DOTFILES_DIRECTORY="${HOME}/.dotfiles"
DOTFILES_TARBALL_URL="https://github.com/${DOTFILES_GITHUB_USER}/${DOTFILES_GITHUB_REPO}/tarball/master"
DOTFILES_GIT_REMOTE="https://github.com/${DOTFILES_GITHUB_USER}/${DOTFILES_GITHUB_REPO}.git"

########################################
# Prints help message.
########################################
run_help() {
cat <<EOT
Usage: $(basename "$0") [options]
Options:
  -h, --help        Print this help text.
  --no-sync         Suppress pulling from the remote repository.
EOT
}

########################################
# Links or copies dotfiles.
########################################
sync_dotfiles() {
  local dest

  for filename in $(find src/ -type f); do
    dest="${HOME}${filename/src}"
    mkdir -p $(dirname ${dest})
    if [[ -f "${dest}" ]]; then
      cp --remove-destination "${dest}" "${dest}.bak"
    fi
    link_file ${filename} ${dest}
  done
}

########################################
# Prints a normal message.
########################################
e_log() {
  printf "$(tput sgr0)%s$(tput sgr0)\n" "$@"
}

########################################
# Prints a information message.
########################################
e_info() {
  printf "$(tput setaf 6)%s$(tput sgr0)\n" "$@"
}

########################################
# Prints a success message.
########################################
e_success() {
  printf "$(tput setaf 2)✓ %s$(tput sgr0)\n" "$@"
}

########################################
# Prints a error message.
########################################
e_error() {
  printf "$(tput setaf 1)✗ %s$(tput sgr0)\n" "$@"
}

########################################
# Prints a warning message.
########################################
e_warning() {
  printf "$(tput setaf 3)❢ %s $(tput sgr0)\n" "$@"
}

########################################
# Asks user for confirmation before proceeding.
########################################
e_confirm() {
  e_log "$@"
  read -p "Do you want to continue? [y/N] " -n 1 </dev/tty
  printf "\n"
}

########################################
# Test whether the result of `e_confirm` is confirmed.
########################################
is_confirmed() {
  if [[ "$REPLY" =~ ^[Yy]$ ]]; then
    return 0
  fi
  return 1
}

########################################
# Tests whether a command is exists.
########################################
type_exists() {
  if [[ $(type -P $1) ]]; then
    return 0
  fi
  return 1
}

########################################
# Tests whether we are in a git repository.
########################################
is_git_repo() {
  $(git rev-parse --is-inside-work-tree &> /dev/null)
}

########################################
# Tests whether the previous command succeeded.
########################################
is_success() {
  if [[ $? -eq 0 ]]; then
    return 0
  fi
  return 1
}

########################################
# Creates or replaces a symlink.
########################################
link_file() {
  [[ -d "${2}" ]] && rm -rf "${2}"
  ln -fs "${DOTFILES_DIRECTORY}/${1}" "${2}"
  if is_success; then
    e_success "Linked ${1} to ${2}"
  else
    e_error "Failed to link ${1} to ${2}"
  fi
}

########################################
# Copies file to specified folder.
########################################
copy_file() {
  cp -f "${DOTFILES_DIRECTORY}/${1}" "${2}"
  if is_success; then
    e_success "Copied ${1} to ${2}"
  else
    e_error "Failed to copy ${1} to ${2}"
  fi
}


# Print help text if `-h` or `--help` flag is specified.
if [[ "$1" == "-h" || "$1" == "--help" ]]; then
  run_help
  exit 0
fi

# Test for all known flags.
for opt in $@; do
  case $opt in
    --no-sync) NO_SYNC=true ;;
    -*|--*) e_warning "Invalid option: $opt"
  esac
done

# Check if cURL is installed.
if ! type_exists "curl"; then
  e_error "cURL must be installed first."
  exit 1
fi

# Check if git is installed.
if ! type_exists "git"; then
  e_error "git must be installed first."
  exit 1
fi

# Download and extract dotfiles if missing.
if [[ ! -d "${DOTFILES_DIRECTORY}" ]]; then
  e_info "Downloading dotfiles..."
  mkdir -p "${DOTFILES_DIRECTORY}"
  curl -fsSLo "${HOME}/dotfiles.tar.gz" ${DOTFILES_TARBALL_URL}
  tar -zxf "${HOME}/dotfiles.tar.gz" --strip-components 1 -C "${DOTFILES_DIRECTORY}"
  rm -rf "${HOME}/dotfiles.tar.gz"
fi

e_info "dotfiles directory is ${DOTFILES_DIRECTORY}"
cd "${DOTFILES_DIRECTORY}"

# Initialize dotfiles git repository if missing.
if ! is_git_repo; then
  e_info "Initializing dotfiles git repository..."
  git init
  git remote add origin ${DOTFILES_GIT_REMOTE}
  git fetch origin master
  git reset --hard FETCH_HEAD
  git clean -fd
fi

# Conditionally sync with the remote repository.
if [[ $NO_SYNC ]]; then
  e_info "Skipped dotfiles sync."
else
  e_info "Syncing dotfiles..."
  git pull --rebase origin master
  git submodule update --recursive --init --quiet
fi

# Ask before potentially overwriting files.
e_confirm "This step may overwrite your existing dotfiles."
if is_confirmed; then
  sync_dotfiles
  source "${HOME}/.bash_profile"
  e_success "Done. :)"
else
  e_warning "Aborted."
  exit 1
fi

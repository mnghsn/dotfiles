" ~/.vim/basic.vim

" Disable Vi compatibility.
set nocompatible

"""""""""""""""""""""""""""""""""""""""
" Directories and Files
"""""""""""""""""""""""""""""""""""""""

" Setup backup directory.
if !isdirectory(glob('$HOME/.vim/backups'))
  call system('mkdir -p $HOME/.vim/backups')
endif
set backupdir=$HOME/.vim/backups

" Setup swap directory.
if !isdirectory(glob('$HOME/.vim/swaps'))
  call system('mkdir -p $HOME/.vim/swaps')
endif
set directory=$HOME/.vim/swaps

" Setup undo directory.
if !isdirectory(glob('$HOME/.vim/undo'))
  call system('mkdir -p $HOME/.vim/undo')
endif
set undodir=$HOME/.vim/undo

" Set the location of `.viminfo` file.
set viminfo+=n$HOME/.vim/.viminfo

"""""""""""""""""""""""""""""""""""""""
" Interface
"""""""""""""""""""""""""""""""""""""""

if has('cmdline_info')
  " Show the cursor line and column number.
  set ruler
  " Show partial commands in status line.
  set showcmd
  " Show whether in INSERT or REPLACE mode.
  set showmode
endif

if has('statusline')
  " Always show status line.
  set laststatus=2
endif

if has('wildmenu')
  " Show a list of possible completions.
  set wildmenu
  " Tab autocomplete longest possible part of a string then list.
  set wildmode=longest,list

  if has('wildignore')
    " macOS and Linux
    set wildignore+=*/tmp/*,*.so,*.swp,*.zip
    " Windows
    set wildignore+=*\\tmp\\*,*.swp,*.zip,*.exe
  endif
endif

" Enable screen title.
set title
" Enable line numbers.
set number
" Highlight the current line.
set cursorline
" Enable mouse.
set mouse=a

" Display a ruler.
let &colorcolumn = "80,100,120,".join(range(200,999),",")

"""""""""""""""""""""""""""""""""""""""
" Editing
"""""""""""""""""""""""""""""""""""""""

if has('autocmd')
  " Load files for specific filetypes.
  filetype on
  filetype indent on
  filetype plugin on

  " Languages with specific tabs/spaces requirements.
  autocmd FileType make setlocal ts=4 sts=4 sw=4 noexpandtab
  " Don't treat JSON file as JavaScript.
  autocmd BufRead,BufNewFile *.json set filetype=json
endif

" Backspace through everything in INSERT mode.
set backspace=indent,eol,start
" Use UTF-8 without BOM.
set encoding=utf-8 nobomb
" Disable line wrap.
set nowrap

" Use 2 spaces for indentation.
set shiftwidth=2
" Use 2 spaces for soft tab.
set softtabstop=2
" Use 2 spaces for tab.
set tabstop=2
" Expand tabs to spaces.
set expandtab

" Show invisible characters.
set list
" Set characters used to indicate invisibles.
set listchars=tab:‣\ ,trail:·,nbsp:·,extends:»,precedes:«,eol:¬

"""""""""""""""""""""""""""""""""""""""
" Searching
"""""""""""""""""""""""""""""""""""""""

if has('extra_search')
  " Highlight searches.
  set hlsearch
  " Highlight dynamically as pattern is typed.
  set incsearch
  " Ignore case of searches, unless it has mixed case.
  set ignorecase
  set smartcase
endif

"""""""""""""""""""""""""""""""""""""""
" Encryption
"""""""""""""""""""""""""""""""""""""""

if has('cryptv')
  if v:version > 704 || v:version == 704 && has('patch399')
    " Set default encryption method to "blowfish2". (vim >= 7.4.399)
    set cryptmethod=blowfish2
  elseif v:version >= 703
    " Set default encryption method to "blowfish".
    set cryptmethod=blowfish
  endif
endif

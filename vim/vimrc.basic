" Disable Vi compatibility
set nocompatible

""""""""""""""""""""""""""""""""""""""""
" Files
""""""""""""""""""""""""""""""""""""""""

set backupdir=$HOME/.vim/backups
set directory=$HOME/.vim/swaps
set undodir=$HOME/.vim/undo
set viminfo+=n$HOME/.vim/.viminfo

""""""""""""""""""""""""""""""""""""""""
" Interface
""""""""""""""""""""""""""""""""""""""""

if has('cmdline_info')
  set ruler     " Show the cursor line and column number
  set showcmd   " Show partial commands in status line
  set showmode  " Show whether in INSERT or REPLACE mode
endif

if has('statusline')
  set laststatus=2  " Always show status line
endif

if has('wildmenu')
  set wildmenu              " Show a list of possible completions
  set wildmode=longest,list " Tab autocomplete longest possible part of a string then list
  if has('wildignore')
    set wildignore+=*/tmp/*,*.so,*.swp,*.zip    " Mac OSX / Linux
    set wildignore+=*\\tmp\\*,*.swp,*.zip,*.exe " Windows
  endif
endif

set title       " Enable screen title
set number      " Enable line numbers
set cursorline  " Highlight current line
set mouse=a     " Enable mouse

" Display a ruler
let &colorcolumn = "80,".join(range(120,999),",")

""""""""""""""""""""""""""""""""""""""""
" Editing
""""""""""""""""""""""""""""""""""""""""

if has('autocmd')
  " Load files for specific filetypes
  filetype on
  filetype indent on
  filetype plugin on
endif

set backspace=indent,eol,start  " Backspace through everything in INSERT mode
set encoding=utf-8 nobomb       " Use UTF-8 without BOM
set nowrap                      " No line wrap

set shiftwidth=2  " Use 2 spaces for indentation
set softtabstop=2 " Use 2 spaces for soft tab
set tabstop=2     " Use 2 spaces for tab
set expandtab     " Expand tab to spaces

set list  " Show invisible characters

" Set characters used to indicate invisibles
set listchars=tab:▶▶
set listchars+=trail:·
set listchars+=nbsp:·
set listchars+=eol:¬

""""""""""""""""""""""""""""""""""""""""
" Searching
""""""""""""""""""""""""""""""""""""""""

if has('extra_search')
  set hlsearch    " Highlight searches
  set incsearch   " Highlight dynamically as pattern is typed
  set ignorecase  " Ignore case of searches,
  set smartcase   "     unless has mixed case
endif

" ~/.vim/basic.vim

" ------------------------------------------------------------------------------
" Backups
" ------------------------------------------------------------------------------

" Setup backup directory.
set backupdir=~/.vim/backups
if !isdirectory(expand(&backupdir))
  call mkdir(expand(&backupdir), 'p')
endif

" Setup swap directory.
set directory=~/.vim/swaps
if !isdirectory(expand(&directory))
  call mkdir(expand(&directory), 'p')
endif

" Setup undo directory.
set undodir=~/.vim/undo
if !isdirectory(expand(&undodir))
  call mkdir(expand(&undodir), 'p')
endif

" Set the location of `viminfo` file.
set viminfo+=n~/.vim/viminfo

" ------------------------------------------------------------------------------
" Interface
" ------------------------------------------------------------------------------

" Always show a status line.
set laststatus=2

" Show the line number in front of each line.
set number

if has('cmdline_info')
  " Show the line and column number of the cursor position.
  set ruler
endif

if has('syntax')
  " Highlight the text line of the cursor.
  set cursorline

  " Show vertical rulers.
  set colorcolumn=80,100,120,200
endif

if has('wildmenu')
  " Show a list of possible completions.
  set wildmenu
  " Complete longest common string, then list alternatives.
  set wildmode=longest,list

  if has('wildignore')
    " Ignore files when expanding wildcards.
    set wildignore+=*.o,*~,*.pyc
    set wildignore+=.git\*,.hg\*,.svn\*
    set wildignore+=*/.git/*,*/.hg/*,*/.svn/*,*/.DS_Store
  endif
endif

if has('title')
  " Enable screen title.
  set title
endif

" Enable the mouse in all five modes.
set mouse=a

" ------------------------------------------------------------------------------
" Editing
" ------------------------------------------------------------------------------

" Set UTF-8 as standard encoding.
set encoding=utf8

if has('autocmd')
  " Enable filetype plugins.
  filetype on
  filetype indent on
  filetype plugin on
endif

" Setup backspace so it acts as it should act.
set backspace=indent,eol,start
set whichwrap+=<,>,h,l

" Use 4 spaces for indentation.
set shiftwidth=4
set tabstop=4

" Use spaces instead of tabs.
set expandtab

" Enable smart indentation editing.
set smarttab

" Show invisible characters.
set list
set listchars=tab:‣\ ,trail:·,nbsp:·,extends:»,precedes:«,eol:¬

" ------------------------------------------------------------------------------
" Searching
" ------------------------------------------------------------------------------

if has('extra_search')
  " Highlight all matched search results.
  set hlsearch
  " Highlight dynamically as pattern is typed.
  set incsearch
endif

" Ignore case in search patterns, unless it has mixed case.
set ignorecase
set smartcase

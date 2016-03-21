" .vimrc

" Disable Vi compatibility
set nocompatible

" ------------------------------------------------------------------------------
" Files
" ------------------------------------------------------------------------------

set backupdir=$HOME/.vim/backups
set directory=$HOME/.vim/swaps
set undodir=$HOME/.vim/undo

" ------------------------------------------------------------------------------
" Interface
" ------------------------------------------------------------------------------

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

set number      " Enable line numbers
set cursorline  " Highlight current line
set mouse=a     " Enable mouse

" ------------------------------------------------------------------------------
" Editing
" ------------------------------------------------------------------------------

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

" ------------------------------------------------------------------------------
" Searching
" ------------------------------------------------------------------------------

if has('extra_search')
  set hlsearch    " Highlight searches
  set incsearch   " Highlight dynamically as pattern is typed
  set ignorecase  " Ignore case of searches,
  set smartcase   "     unless has mixed case
endif

" ------------------------------------------------------------------------------
" Keybindings
" ------------------------------------------------------------------------------

" Use <Shift>-<Arrows> to select the active split
noremap <S-Up> <C-W><C-J>
imap <S-Up> <Esc><S-Up>
noremap <S-Down> <C-W><C-K>
imap <S-Down> <Esc><S-Down>
noremap <S-Left> <C-W><C-H>
imap <S-Left> <Esc><S-Left>
noremap <S-Right> <C-W><C-L>
imap <S-Right> <Esc><S-Right>

" Clear search highlight by dobule tapping <Esc>
nmap <Esc><Esc> :nohlsearch<CR><Esc>

" Save file
nmap <Leader>s :update<CR>

" ------------------------------------------------------------------------------
" Colors
" ------------------------------------------------------------------------------

if has('syntax')
  syntax enable                 " Enable syntax highlight
  set t_Co=256                  " Set 256 color terminal support
  set background=dark           " Set dark background
  silent! colorscheme molokai   " Set color scheme
endif

" ------------------------------------------------------------------------------
" Plugins (vim-plug)
" ------------------------------------------------------------------------------

call plug#begin('~/.vim/plugged')

Plug 'airblade/vim-gitgutter'
Plug 'editorconfig/editorconfig-vim'
Plug 'flazz/vim-colorschemes'
Plug 'scrooloose/nerdtree'
Plug 'scrooloose/syntastic'
Plug 'vim-airline/vim-airline'
Plug 'vim-airline/vim-airline-themes'

call plug#end()

" vim-colorschemes
silent! colorscheme molokai

" NERDTree
let NERDTreeAutoDeleteBuffer = 1
let NERDTreeMinimalUI = 1
let NERDTreeQuitOpen = 0
let NERDTreeShowHidden = 1
nmap <C-N> :NERDTreeToggle<CR>
nmap <C-M> :NERDTreeFind<CR>

" vim-airline
let g:airline_theme = 'molokai'                           " Set vim-airline theme
let g:airline_left_sep = ' '                              " Left separator
let g:airline_right_sep = ' '                             " Right separator
let g:airline_section_x = '%{strftime("%m/%d %H:%M")}% '  " Show clock at section x
let g:airline#extensions#tabline#enabled = 1              " Enable tabline
let g:airline#extensions#tabline#fnamemod = ':t'          " Show only file name in tabline
let g:airline#extensions#tabline#left_sep = ' '           " Tabline left separator when selected
let g:airline#extensions#tabline#left_alt_sep = '|'       " Tabline left separator
"let g:airline_powerline_fonts = 1                        " Use Powerline fonts
set laststatus=2
nmap <Tab> :bn!<CR>     " Use <Tab> to switch to next buffer in NORMAL mode
nmap ` :bp!<CR>         " Use <`> to switch to previous buffer in NORMAL mode`
nmap <Leader>d :bd<CR>  " Close current buffer

" ------------------------------------------------------------------------------
" Local settings
" ------------------------------------------------------------------------------

if filereadable(glob('$HOME/.vimrc.local'))
  source $HOME/.vimrc.local
endif

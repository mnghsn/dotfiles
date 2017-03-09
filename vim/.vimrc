" ~/.vimrc

" Disable Vi compatibility.
set nocompatible

" ------------------------------------------------------------------------------
" Directories and Files
" ------------------------------------------------------------------------------

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

" ------------------------------------------------------------------------------
" User Interface
" ------------------------------------------------------------------------------

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
    " OSX and Linux
    set wildignore+=*/tmp/*,*.so,*.swp,*.zip

    " Windows
    set wildignore+=*\\tmp\\*,*.swp,*.zip,*.exe
  endif
endif

" Enable screen title.
set title

" Enable line nunbers.
set number

" Highlight the current line.
set cursorline

" Enable mouse.
set mouse=a

" Display a ruler.
let &colorcolumn = "80,".join(range(120,999),",")

" ------------------------------------------------------------------------------
" Editing
" ------------------------------------------------------------------------------

if has('autocmd')
  " Load files for specific filetypes
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
set listchars=tab:▶▶
set listchars+=trail:·
set listchars+=nbsp:·
set listchars+=eol:¬

" ------------------------------------------------------------------------------
" Searching
" ------------------------------------------------------------------------------

if has('extra_search')
  " Highlight searches.
  set hlsearch

  " Highlight dynamically as pattern is typed.
  set incsearch

  " Ignore case of searchs, unless it hase mixed case.
  set ignorecase
  set smartcase
endif

" ------------------------------------------------------------------------------
" Key mappings
" ------------------------------------------------------------------------------

" Use <Shift>-<Arrows> to select the active split.
noremap <S-Up> <C-W><C-K>
imap <S-Up> <Esc><S-Up>
noremap <S-Down> <C-W><C-J>
imap <S-Down> <Esc><S-Down>
noremap <S-Left> <C-W><C-H>
imap <S-Left> <Esc><S-Left>
noremap <S-Right> <C-W><C-L>
imap <S-Right> <Esc><S-Right>

" Clear search highlight by dobule tapping <Esc>.
nmap <Esc><Esc> :nohlsearch<CR><Esc>

" Save file.
inoremap <C-s>     <C-O>:update<CR>
nnoremap <C-s>     :update<CR>
nnoremap <Leader>s :update<CR>
nnoremap <Leader>w :update<CR>

" ------------------------------------------------------------------------------
" Colors
" ------------------------------------------------------------------------------

if has('syntax')
  " Enable syntax highlight.
  syntax enable

  " Set 256 color terminal support.
  set t_Co=256

  " Set dark background.
  set background=dark

  " Set color scheme.
  silent! colorscheme molokai
endif

" ------------------------------------------------------------------------------
" Plugins
" ------------------------------------------------------------------------------

" Automatically install vim-plug and plugins.
" https://github.com/junegunn/vim-plug/wiki/faq

if empty(glob('~/.vim/autoload/plug.vim'))
  silent !curl -fLo ~/.vim/autoload/plug.vim --create-dirs
    \ https://raw.githubusercontent.com/junegunn/vim-plug/master/plug.vim
  autocmd VimEnter * PlugInstall --sync | source $MYVIMRC
endif

call plug#begin('~/.vim/plugged')

" Load plugins
Plug 'airblade/vim-gitgutter'
Plug 'ap/vim-css-color'
Plug 'editorconfig/editorconfig-vim'
Plug 'elzr/vim-json'
Plug 'flazz/vim-colorschemes'
Plug 'othree/es.next.syntax.vim'
Plug 'othree/html5.vim'
Plug 'othree/yajs.vim'
Plug 'plasticboy/vim-markdown'
Plug 'scrooloose/nerdtree'
Plug 'terryma/vim-multiple-cursors'
Plug 'vim-airline/vim-airline-themes'
Plug 'vim-airline/vim-airline'
Plug 'Xuyuanp/nerdtree-git-plugin'
Plug 'Yggdroot/indentLine'

call plug#end()

" ------------------------------------------------------------------------------
" Plugin: vim-colorschemes
" ------------------------------------------------------------------------------

silent! colorscheme molokai

" ------------------------------------------------------------------------------
" Plugin: NERDTree
" ------------------------------------------------------------------------------

let NERDTreeAutoDeleteBuffer = 1
let NERDTreeMinimalUI = 1
let NERDTreeQuitOpen = 0
let NERDTreeShowHidden = 1

" Use <Ctrl>-<N> to toggle NERDTree.
nmap <C-N> :NERDTreeToggle<CR>

" Use <Ctrl>-<M> to find current file in NERDTree.
nmap <C-M> :NERDTreeFind<CR>

" ------------------------------------------------------------------------------
" Plugin: vim-airline
" ------------------------------------------------------------------------------

" Set vim-airline theme.
let g:airline_theme = 'molokai'

" Set separators.
let g:airline_left_sep = ' '
let g:airline_right_sep = ' '

" Show a clock at section x.
let g:airline_section_x = '%{strftime("%m/%d %H:%M")}% '

" Enable tabline.
let g:airline#extensions#tabline#enabled = 1

" Show only file name in tabline.
let g:airline#extensions#tabline#fnamemod = ':t'

" Set tabline separators.
let g:airline#extensions#tabline#left_sep = ' '
let g:airline#extensions#tabline#left_alt_sep = '|'

" Use Powerline fonts.
"let g:airline_powerline_fonts = 1

" Always show status line.
set laststatus=2

" Use <Tab> to switch to next buffer in NORMAL mode.
nmap <Tab> :bn!<CR>

" Use <`> to switch to previous buffer in NORMAL mode.
nmap ` :bp!<CR>

" Use <Leader>-<D> to close current buffer.
nmap <Leader>d :bd<CR>

" ------------------------------------------------------------------------------
" Plugin: indentLine
" ------------------------------------------------------------------------------

let g:indentLine_char = '|'

" ------------------------------------------------------------------------------
" Plugin: vim-json
" ------------------------------------------------------------------------------

" Disable concealing
let g:vim_json_syntax_conceal = 0

" ------------------------------------------------------------------------------
" Plugin: vim-markdown
" ------------------------------------------------------------------------------

" Disable folding
let g:vim_markdown_folding_disabled = 1

" Disable concealing
let g:vim_markdown_conceal = 0

" Enable YAML front matter
let g:vim_markdown_frontmatter = 1

" Enable JSON front matter
let g:vim_markdown_json_frontmatter = 1

" Set new list item indentation to 2 spaces
let g:vim_markdown_new_list_item_indent = 2

" ------------------------------------------------------------------------------
" User configuration
" ------------------------------------------------------------------------------

" Load user configuration file if it exists.
if filereadable(glob('$HOME/.vimrc.local'))
  source $HOME/.vimrc.local
endif

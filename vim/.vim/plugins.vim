" ~/.vim/plugins.vim

"""""""""""""""""""""""""""""""""""""""
" Plugin Manager
"""""""""""""""""""""""""""""""""""""""

" Automatically install vim-plug and plugins.
" https://github.com/junegunn/vim-plug/wiki/tips
if empty(glob('~/.vim/autoload/plug.vim'))
  silent !curl -fLo ~/.vim/autoload/plug.vim --create-dirs
    \ 'https://raw.githubusercontent.com/junegunn/vim-plug/master/plug.vim'
  autocmd VimEnter * PlugInstall --sync | source $MYVIMRC
endif

call plug#begin('~/.vim/plugged')

" Load plugins.
Plug 'jacoborus/tender.vim'
Plug 'scrooloose/nerdtree'
Plug 'Xuyuanp/nerdtree-git-plugin'
Plug 'vim-airline/vim-airline'
Plug 'airblade/vim-gitgutter'
Plug 'Yggdroot/indentLine'
Plug 'terryma/vim-multiple-cursors'
Plug 'tpope/vim-surround'
Plug 'editorconfig/editorconfig-vim'
Plug 'sheerun/vim-polyglot'
Plug 'ap/vim-css-color'

call plug#end()

"""""""""""""""""""""""""""""""""""""""
" Plugin: tender
"""""""""""""""""""""""""""""""""""""""

" Set color scheme.
silent! colorscheme tender
" Set vim-airline theme.
let g:airline_theme = 'tender'

"""""""""""""""""""""""""""""""""""""""
" Plugin: NERDTree
"""""""""""""""""""""""""""""""""""""""

let NERDTreeAutoDeleteBuffer = 1
let NERDTreeMinimalUI = 1
let NERDTreeQuitOpen = 0
let NERDTreeShowHidden = 1

" Use <Ctrl>-<M> to toggle NERDTree.
nmap <C-M> :NERDTreeToggle<CR>

"""""""""""""""""""""""""""""""""""""""
" Plugin: vim-airline
"""""""""""""""""""""""""""""""""""""""

" Always show status line.
set laststatus=2

" Set vim-airline theme.
"let g:airline_theme = 'dark'
" Show a clock at section x.
let g:airline_section_x = '%{strftime("%m/%d %H:%M")}% '
" Enable tabline.
let g:airline#extensions#tabline#enabled = 1
" Show only file name in tabline.
let g:airline#extensions#tabline#fnamemod = ':t'
" Use Powerline fonts.
let g:airline_powerline_fonts = $HAS_POWERLINE_FONT

" Use <Tab> to switch to next buffer in NORMAL mode.
nmap <Tab> :bn!<CR>
" Use <`> to switch to previous buffer in NORMAL mode.
nmap ` :bp!<CR>
" Use <Leader>-<D> to close current buffer.
nmap <Leader>d :bd<CR>

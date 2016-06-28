""""""""""""""""""""""""""""""""""""""""
" Plugins (vim-plug)
""""""""""""""""""""""""""""""""""""""""

call plug#begin('~/.vim/plugged')

Plug 'airblade/vim-gitgutter'
Plug 'editorconfig/editorconfig-vim'
Plug 'flazz/vim-colorschemes'
Plug 'scrooloose/nerdtree'
Plug 'vim-airline/vim-airline-themes'
Plug 'vim-airline/vim-airline'
Plug 'Xuyuanp/nerdtree-git-plugin'

call plug#end()

" Install missing plugins automatically
autocmd VimEnter *
  \  if !empty(filter(copy(g:plugs), '!isdirectory(v:val.dir)'))
  \|   PlugInstall | q
  \| endif

""""""""""""""""""""""""""""""""""""""""
" Plugin: vim-colorschemes
""""""""""""""""""""""""""""""""""""""""

silent! colorscheme molokai

""""""""""""""""""""""""""""""""""""""""
" Plugin: NERDTree
""""""""""""""""""""""""""""""""""""""""

let NERDTreeAutoDeleteBuffer = 1
let NERDTreeMinimalUI = 1
let NERDTreeQuitOpen = 0
let NERDTreeShowHidden = 1

nmap <C-N> :NERDTreeToggle<CR>
nmap <C-M> :NERDTreeFind<CR>

""""""""""""""""""""""""""""""""""""""""
" Plugin: vim-airline
""""""""""""""""""""""""""""""""""""""""

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
nmap ` :bp!<CR>         " Use <`> to switch to previous buffer in NORMAL mode
nmap <Leader>d :bd<CR>  " Close current buffer

" ~/.vim/mappings.vim

" ------------------------------------------------------------------------------
" Mappings
" ------------------------------------------------------------------------------

" Set <Leader> to comma.
let mapleader = ','

" <Shift>-<Arrows> to select the active split.
nnoremap <S-Left> <C-W><C-H>
nnoremap <S-Right> <C-W><C-L>
nnoremap <S-Up> <C-W><C-K>
nnoremap <S-Down> <C-W><C-J>

" <Esc><Esc> to clear search highlight.
nnoremap <Esc><Esc> :nohlsearch<CR><Esc>

" <Ctrl>-<S> to save file.
inoremap <C-s> <C-O>:update<CR>
nnoremap <C-s> :update<CR>

" `:W` to save file as sudo.
command! W execute 'w !sudo tee % > /dev/null' <bar> edit!

" <Tab> to switch to next buffer.
nnoremap <Tab> :bnext!<CR>
" <`> to switch to previous buffer.
nnoremap ` :bprevious!<CR>
" <Leader><D> to delete current buffer.
nnoremap <Leader>d :bdelete<CR>

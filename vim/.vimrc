" ~/.vimrc

"""""""""""""""""""""""""""""""""""""""
" Loads configuration file if exists.
"""""""""""""""""""""""""""""""""""""""
function! s:load_config(file)
  if filereadable(glob(a:file))
    execute 'source' a:file
  endif
endfunction

" Load configuration files.
call s:load_config('$HOME/.vim/basic.vim')
call s:load_config('$HOME/.vim/colors.vim')
call s:load_config('$HOME/.vim/mappings.vim')
call s:load_config('$HOME/.vim/plugins.vim')
call s:load_config('$HOME/.vimrc.local')

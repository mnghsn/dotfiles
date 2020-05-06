FROM ubuntu:20.04

RUN apt-get update \
  && apt-get upgrade -y \
  && apt-get install -y build-essential bash-completion sudo curl wget git vim tmux

RUN useradd --user-group --create-home --shell /bin/bash user \
  && echo "user ALL=(ALL) NOPASSWD:ALL" >> /etc/sudoers

USER user
ENV HOME=/home/user

ARG DOTFILES_PATH=$HOME/.dotfiles
ADD . $DOTFILES_PATH
RUN $DOTFILES_PATH/bin/dotfiles --no-sync

RUN mkdir -p $HOME/workspace
WORKDIR $HOME/workspace
VOLUME $HOME/workspace

ENTRYPOINT ["/bin/bash"]
CMD ["--login"]

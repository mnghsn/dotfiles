FROM ubuntu:18.04
MAINTAINER Jimmy Lin <jmlntw@gmail.com>

RUN apt-get update && \
    apt-get upgrade -y && \
    apt-get install -y curl git vim sudo

RUN useradd --user-group --create-home --shell /bin/bash jimmy && \
    echo "jimmy ALL=(ALL) NOPASSWD:ALL" >> /etc/sudoers

USER jimmy
ENV HOME=/home/jimmy
WORKDIR /home/jimmy

ADD . /home/jimmy/.dotfiles
RUN cd ~/.dotfiles/bin && ./dotfiles --no-sync

VOLUME ["/home/jimmy/workspace"]

ENTRYPOINT ["/bin/bash"]
CMD ["--login"]

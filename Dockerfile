FROM ubuntu:16.04

ARG CONDA_DIR=/opt/conda
ENV PATH $CONDA_DIR/bin:$PATH

RUN apt-get update && \
    apt-get install -y --no-install-recommends \
        ca-certificates \
        cmake \
        build-essential \
        gcc \
        g++ \
        git \
        wget && \
    # python environment
    wget https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-x86_64.sh && \
    /bin/bash Miniconda3-latest-Linux-x86_64.sh -f -b -p $CONDA_DIR && \
    export PATH="$CONDA_DIR/bin:$PATH" && \
    conda config --set always_yes yes --set changeps1 no && \
    # lightgbm
    conda install -q -y numpy scipy scikit-learn pandas && \
    git clone --recursive --branch stable --depth 1 https://github.com/Microsoft/LightGBM && \
    cd LightGBM/python-package && python setup.py install && \
    # clean
    apt-get autoremove -y && apt-get clean && \
    conda clean -a -y && \
    rm -rf /usr/local/src/*

RUN apt-get install -y --no-install-recommends \
        curl \
        nginx

ADD requirements.txt /app/requirements.txt

RUN pip install -r /app/requirements.txt

ADD src/backend/app.py /app/app.py
ADD src/backend/__init__.py /app/__init__.py
ADD src/backend/model.py /app/model.py
ADD src/backend/model.pkl /app/model.pkl

ADD start.sh /app/start.sh
RUN chmod +x /app/start.sh

ADD build /data/www
ADD nginx.conf /etc/nginx/nginx.conf

WORKDIR /app

EXPOSE 8080
EXPOSE 80

CMD ["./start.sh"]

---
title: Venv
createdDate: 2021-03-08
updatedDate: 2021-03-08
published: true
---

## Create/activate virtual environment
```
# create
py -m venv venv

# activate
venv\Scripts\activate
```

## Remove virtual environment
```
rmdir /s venv
```

## Install/uninstall packages
```
# install latest version
py -m pip install "package_name"

# install specific version
py -m pip install "package_name"==1.0.4

#  uninstall package
py -m pip uninstall "package_name"

# upgrade package
py -m pip install -U "package_name"
```

## List packages
```
py -m pip list
py -m pip list --outdated

# show package details
py -m pip show "package_name"
```

## Save/install packages in text file
```
py -m pip freeze > requirements.txt

#  install packages within virtual environment
py -m pip install -r requirements.txt
```

## Add/remove virtual environments in Jupyter Notebooks
```
# add virtual environment to kernel
py -m ipykernel install --user --name=venv

# remove virtual environment from kernel
py -m jupyter kernelspec uninstall venv
```
#!bin/bash

cd home/vgoetze1/MMWP-Uebungen/Uebung2/LSG

for f in index.*
    cp -v "$f" /home/vgoetze1/public_html/Beleg2MMWP
    echo "$f"
done


#!/bin/sh
set -e
 
echo "Deploying application ..."
 
# Enter maintenance mode
    (php artisan down) || true
    
    # Update codebase
    git pull origin master
 
    # Install dependencies based on lock file
    composer install --no-interaction --prefer-dist --optimize-autoloader

 
    # Note: If you're using queue workers, this is the place to restart them.
    # ...
 
    # Clear cache
    php artisan optimize
 
    # Reload PHP to update opcache
    echo "" | sudo -S service php7.4-fpm reload
# Exit maintenance mode
    
    php artisan up
 
echo "Site deployed!"


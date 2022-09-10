// @ts-check    

(function () {
    /**
     * Looks for a search within a string
     * @param {string} string 
     * @param {string} search 
     * @returns 
     */
    function contains(string, search) {
        return string.indexOf(search) > -1;
    }

    /**
     * Simplifies a string to plain lower case, removing diacritic characters and hyphens
     * This means a search for "co-op" will be found in "COOP" and "Café" will be found in "cafe"
     * @param {string} a 
     * @returns 
     */
    function sanitise(a) {
        // @ts-ignore
        if (String.prototype.normalize) {
            // Reduces diacritic characters to plain characters
            a.trim().normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/-/g, '');
        }

        // Some browsers can't normalise strings
        return a.trim().toLowerCase().replace(/-/g, '');
    }

    function isLongEnough(a) {
        return a.length > 1;
    }

    function explode(s) {
        return s.split(' ').filter(isLongEnough).map(sanitise);
    }

    var haystack = [];
    var needles = [];
    var currentQuery = null;

    var ready = false;

    /**
     * Performs the search
     * @param {string} s 
     * @returns 
     */
    function search(s) {
        needles = [];

        // Clean the input
        var trimmedQuery = sanitise(s);

        if (currentQuery === trimmedQuery) {
            return;
        }

        currentQuery = trimmedQuery;

        var queryTerms = explode(currentQuery);

        for (var i = 0; i < haystack.length; i++) {
            var item = haystack[i];
            item.score = 0;
            var title = sanitise(item.title);
            var category = sanitise(item.category);
            var tags = sanitise(item.tags);

            for (var j = 0; j < queryTerms.length; j++) {
                var term = queryTerms[j];

                if (contains(title, term)) {
                    item.score = item.score + 10;
                }

                if (contains(category, term)) {
                    item.score = item.score + 5;
                }

                if (contains(tags, term)) {
                    item.score = item.score + 5;
                }
            }

            if (item.score > 0) {
                needles.push(item);
            }
        }

        needles.sort(function (a, b){
            return b.score - a.score;
        });

        var results = document.getElementById('site-search-results');

        if (results == null) {
            throw new Error('Cannot find #site-search-results');
        }

            var h2 = document.createElement('h2');
        h2.innerHTML =  needles.length === 0
            ? 'No Results'
            : 'Results';

        var ol = document.createElement('ol');
        ol.className = 'site-search-results';
        ol.appendChild(h2);

        var limit = Math.min(needles.length, 12)

        for (var i = 0; i < limit; i++) {
            var needle = needles[i];

            var a = document.createElement('a');
            a.innerHTML = needle.title;
            a.href = needle.url;

            var li = document.createElement('li');
            li.appendChild(a);

            ol.appendChild(li);
        }

        results.innerHTML = '';
        results.appendChild(ol);
    }

    var debounceTimer;

    function debounceSearch() {
        var input = /** @type {HTMLInputElement} */(document.getElementById('site-search-query'));

        if (input == null) {
            throw new Error('Cannot find #site-search-query');
        }

        var s = input.value;

        window.clearTimeout(debounceTimer);
        debounceTimer = window.setTimeout(function () {
            if (ready) {
                console.log('Searching...', s);
                search(s);
            }
        }, 200);
    }

    fetch('/search.json')
        .then(function (response) { 
            return response.json();
        })
        .then(function (data) { 
            haystack = data;
            ready = true;

            var siteSearch = document.getElementById('site-search');
            var siteSearchQuery = document.getElementById('site-search-query');

            if (siteSearch == null || siteSearchQuery == null) {
                throw new Error('Cannot find #site-search or #site-search-query');
            }
        
            siteSearch.addEventListener('submit', function (e) {
                e.preventDefault();
                debounceSearch();
                return false;
            });
        
            siteSearchQuery.addEventListener('keyup', function (e) {
                e.preventDefault();
                debounceSearch();
                return false;
            });

            console.log('Search ready');
        });
}());
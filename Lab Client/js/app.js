let totalEntries; // Holds the total number of entries in the database.
let pageSizeTest = 50; // Specifies the number of entries to display per page.
let options = {
    // Object containing data and methods for the Vue.js application.
    data: () => {
        // Function returning an object containing the application's reactive data properties.
        return {
            title: "Sakila API", // Title of the application.
            resourceData: {}, // Fetched data from the API.
            resourceType: "", // Type of resource being fetched.
            headings: [], // Column headings for the fetched data.
            content: [], // Actual content/data fetched from the API.
            page: 0, // Current page number.
            pageSize: 5, // Number of entries to display per page.
            currentView: "", // Tracks the current view/resource being displayed.
            totalPages: 0, // Total number of pages based on total entries and page size.
            enableButtons: false, // Indicates whether navigation buttons should be enabled.
        }
    },
    methods: {
        // Method to asynchronously fetch data from the API based on the specified resource type and page number.
        async fetchResource(resource, calledDirectly) {
            if (calledDirectly) {
                this.currentView = resource;
                this.page = 0;
                this.getTotalPages(resource);
            }

            this.resourceType = resource;
            this.enableButtons = true;
            try {      
                let response = await fetch(
                    "http://localhost:8080/api/" + resource + "?page=" + this.page + "&pagesize=" + pageSizeTest 
                );
                let json = await response.json();
                this.content = json.content;
                this.resourceData = json;
                this.headings = Object.keys(this.content[0]);
            } catch (error) {
                alert(error);
            }
        },

        // Method to navigate to the first page of data for the specified resource.
        async goToFirstPage(resource) {
            if (this.currentView != resource) {
                this.currentView = resource;
                this.getTotalPages(resource);
            }
            this.page = 0;
            this.fetchResource(resource, 0);
        },

        // Method to navigate to the previous page of data for the specified resource.
        async goToPreviousPage(resource) {
            if (this.currentView != resource) {
                this.currentView = resource;
                this.page = 0;
                this.getTotalPages(resource);
            } else {
                this.page--;
                if (this.page < 0) {
                    this.page = 0;
                }
            }
            this.fetchResource(resource, 0);
        },

        // Method to navigate to the next page of data for the specified resource.
        async goToNextPage(resource) {
            if (this.currentView != resource) {
                this.currentView = resource;
                this.page = 0;
                this.getTotalPages(resource);
            } else {
                this.page++;
                if (this.page > this.totalPages - 1) {
                    this.page = this.totalPages - 1;
                }
            }
            this.fetchResource(resource, 0);
        },

        // Method to navigate to the last page of data for the specified resource.
        async goToLastPage(resource) {
            if (this.currentView != resource) {
                this.currentView = resource;
                this.page = 0;
                this.getTotalPages(resource);
            } else {
                this.page = this.totalPages - 1;
            }
            this.fetchResource(resource, 0);
        },

        // Method to asynchronously fetch the total number of entries for the specified resource to calculate the total number of pages.
        async getTotalPages(resource) {
            try {
                this.enableButtons = true;
                let response = await fetch(
                    "http://localhost:8080/api/getAll?type=" + resource
                );
                let json = await response.json();
                totalEntries = json;
                if (pageSizeTest > totalEntries || pageSizeTest == 0) {
                    pageSizeTest = 5;
                }
                this.totalPages = Math.round(totalEntries / pageSizeTest);
            } catch (error) {
                alert(error);
            }
        },
    },
};

let app = Vue.createApp(options); // Creates a Vue application with the specified options.
app.mount("#app"); // Mounts the Vue application to the element with the ID "app" in the HTML document.

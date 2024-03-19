let totalEntries;
let pageSizeTest = 50;
let options = {
    data: () => {
        return {
            title: "Sakila API",
            resourceData: {},
            resourceType: "",
            headings: [],
            content: [],
            page: 0,
            pageSize: 5,
            currentVie: "",
            totalPages: 0,
            enableButtons: false,
        }
    },
    methods: {
        async fetchResource(resource,changepage,pageSize) {
            this.resourceType = resource

            try {
                if(this.currentVie != resource)
                {
                    this.page = 0
                    this.currentVie = resource
                    try {
                        this.enableButtons = true;
                        let response = await fetch(
                            "http://localhost:8080/api/getAll?type=" + resource
                        )
                        let json = await response.json()
                        totalEntries = json
                        // if(this.pageSize > totalEntries || pageSize == 0)
                        // {
                        //     pageSize = 5;
                        // }
                        // this.totalPages = Math.round(totalEntries/pageSize)
                        if(pageSizeTest > totalEntries || pageSizeTest == 0)
                        {
                            pageSizeTest = 5;
                        }
                        this.totalPages = Math.round(totalEntries/pageSizeTest)
    
                    }catch (error) {
                        alert(error)
                    }
                }
                else
                {

                    this.page += changepage

                    if(this.page < 0)
                    {
                        this.page = 0
                    }
                    else if (this.page > this.totalPages - 1)
                    {
                        this.page = this.totalPages - 1
                    }
                }
                
                let response = await fetch(
                    "http://localhost:8080/api/" + resource + "?page=" + this.page + "&pagesize=" + pageSizeTest 
                )
                let json = await response.json()
                this.content = json.content
                this.resourceData = json
                this.headings = Object.keys(this.content[0])

            } catch (error) {
                alert(error)
            }
        },
    },
}
let app = Vue.createApp(options)
app.mount("#app")

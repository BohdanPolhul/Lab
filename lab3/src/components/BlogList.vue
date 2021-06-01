<template>
    <div>
        <ul>
            <BlogItem 
            v-bind:edit="edit"
            
            v-for="blog in blogs"
            :key="blog._id"
            v-bind:blog="blog"
            v-on:remove-blog="removeblog(blog._id)"
            v-on:edit-blog="editBlog(blog._id,blog.message)"
            />
            
        </ul>
    </div>
</template>
<script>
import URL from './URL/URL'
import BlogItem from './BlogItem';
export default {
    props:['blogs'],
    components:{
        BlogItem
    },
    methods:{
        removeblog(_id){
            fetch(URL+"deleteBlog/"+_id,{
                method:'DELETE',
                header:{'Accept':'application/json',
                'Content-Type':'application/json'}
            })
            this.$emit('remove-blog',_id)
        },
        editBlog(id,message){
            this.$emit('edit-blog',id,message)
        }
    }
}
</script>

<template>
    <footer class="footer">
        <div class="container">
            <span v-html="theme.footer" />
        </div>
    </footer>
</template>

<script>
export default {
    name: 'Footer',
    props: {
        theme: {
            type: Object,
            default () {
                return {}
            }
        }
    },
    data() {
        return {
            
        }
    }
}
</script>

<style scoped>
.footer {
    font-size: 0.8rem;
    padding: 6rem 0;
}
</style>

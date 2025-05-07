<template>
    <div class="bg-gray-100 dark:bg-gray-800 py-4">
        <div class="prose mx-auto dark:prose-invert p-4 md:text-lg opacity-60">

            <div class="flex-col md:flex-row flex justify-between border-b-2 border-b-gray-300">
                <div>
                    <p class="text-sm">
                        薛寒 | Han Xue <br />
                        CS Ph.D. Candidate <a href="https://en.sjtu.edu.cn/">@SJTU</a> <br />
                        Research Interests: Robotics, Computer Vision
                    </p>
                </div>

                <div>
                    <p class="text-sm md:text-right [&_br]:hidden [&_br]:md:inline">
                        <a href="mailto:xiaoxiaoxh@sjtu.edu.cn">E-Mail</a> <br />
                        <a href="https://github.com/xiaoxiaoxh">GitHub</a> <br />
                        <a href="https://twitter.com/HanXue012">Twitter</a> <br />
                    </p>
                </div>
            </div>


            <div class="text-gray-500 dark:text-gray-400 mx-auto text-sm">
                <p>
                    © <a href="https://hanxue.me">Han Xue</a> {{ year }}. Last updated: {{ datetime }}.
                    Use my website <a class="underline" href="https://github.com/YiqinZhao/yiqinzhao.me-source">template made by Yiqin Zhao</a>.
                </p>
            </div>

        </div>

    </div>
</template>

<script setup>
const year = new Date().getFullYear()
const datetime = new Date().toLocaleDateString()
</script>

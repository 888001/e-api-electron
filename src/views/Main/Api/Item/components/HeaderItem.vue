<template>
<!-- header参数 -->
    <div class="HeaderItem">
        <div class="HeaderItemList" v-for="(item,index) in apiItem.apiQequestHeader" :key="index">
            <!-- key -->
            <div class="HeaderItemListKey">
                <el-input  spellcheck="false" :modelValue="item.itemKey" 
                    @blur="itemKeyBlur"  @input="(val)=>{apiKeyClick(val,index,'itemKey')}" 
                    placeholder="请输入Key值" />
            </div>
            <!-- value -->
            <div class="HeaderItemListValue">
                <el-input  spellcheck="false"  :modelValue="item.itemVal"   
                    @input="(val)=>{apiKeyClick(val,index,'itemVal')}"    placeholder="请输入Value值" />
            </div>
            <!-- 是否必填 -->
            <div class="HeaderItemListRequired">
                <el-select  class="m-2" placeholder="是否必填" :modelValue="item.itemRequired"
                    @change="(val)=>{apiKeyClick(val,index,'itemRequired')}" size="large">
                    <el-option
                    v-for="item in requiredOption"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                    >
                    </el-option>
                </el-select>
            </div>
            <!-- 类型 -->
            <div class="HeaderItemListType">
                <el-select  class="m-2" placeholder="类型" :modelValue="item.itemType" 
                    @change="(val)=>{apiKeyClick(val,index,'itemType')}" size="large">
                    <el-option
                    v-for="item in typeOption"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                    >
                    </el-option>
                </el-select>
            </div>
            <!-- 备注 -->
            <div class="HeaderItemListRemarks">
                <el-input  spellcheck="false" :modelValue="item.itemMark" 
                    @input="(val)=>{apiKeyClick(val,index,'itemMark')}" placeholder="请输入备注" />
            </div>
            <!-- 删除 -->
            <div class="HeaderItemListDelect">
                <span class="iconfont icon-shanchu HeaderItemListDelectIcon" v-if="index != apiItem.apiQequestHeader.length - 1" @click="deleteItem(index)"></span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {

            requiredOption:[
                {
                    value: 1,
                    label: '是'
                },
                {
                    value: 0,
                    label: '否'
                }
            ],
            typeOption: [
                {
                    value: 1,
                    label: '字符串'
                },
                {
                    value: 2,
                    label: '数字'
                },
                {
                    value: 3,
                    label: '布尔值'
                },
            ],
            option: {
                itemKey: '',
                itemVal: '',
                itemRequired: 0,
                itemType: 1,
                itemMark: ''
            }
        }
    },
    methods: {
        deleteItem(index){
            this.$store.commit('ApiList/deleteOptionItem',{name: "apiQequestHeader", index:index})
        },
        itemKeyBlur(){
            if(this.apiItem.apiQequestHeader[this.apiItem.apiQequestHeader.length - 1].itemKey && this.apiItem.apiQequestHeader[this.apiItem.apiQequestHeader.length - 1].itemKey.length > 0){
                    this.$store.commit('ApiList/setAPiOption',{name: "apiQequestHeader", value: {...this.option}})
                }
        },
        apiKeyClick(val,index,itemKey){
            this.$store.commit('ApiList/setAPiOptionItem',{name: "apiQequestHeader", value: val, index:index,'key':itemKey})
        }
    },
    computed: {
        apiItem(){
            if(this.$store.getters['ApiList/apiName'] < this.$store.state.ApiList.apiList.length){
                return this.$store.state.ApiList.apiList[this.$store.getters['ApiList/apiName']]
            }else {
                return {}
            }
            
        }
    },
    watch: {
        'apiItem.apiQequestHeader': {
            handler(news){
                if(!news || news.length == 0){
                    this.$store.commit('ApiList/setAPiName',{name: "apiQequestHeader", value: [{...this.option}]})
                }
            },
            immediate: true,
            deep: true
        }
    }
}
</script>

<style scoped>
.HeaderItem{
    width: 100%;
    height: auto;
}
.HeaderItemList{
    width: 100%;
    height: 45px;
    border-bottom: 1px solid #E9ECEF;
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
}
.HeaderItemListKey{
    width: 260px;
    height: 100%;
    border-right: 1px solid #E9ECEF;
    box-sizing: border-box;
    line-height: 45px;
}
.HeaderItemList >>> .el-input__inner{
    background: #ffffff;
    border-color: transparent;
}
.HeaderItemList >>> .el-input__inner:hover{
    border-color: transparent;
    background: #ffffff;
}
.HeaderItemListValue{
    flex: 1;
    height: 100%;
    border-right: 1px solid #E9ECEF;
    box-sizing: border-box;
    line-height: 45px;
}
.HeaderItemListRequired{
    width: 120px;
    height: 100%;
    border-right: 1px solid #E9ECEF;
    box-sizing: border-box;
    line-height: 45px;
}

.HeaderItemList >>> .el-select .el-input.is-focus .el-input__inner{
    border-color: transparent;
}
.HeaderItemListType{
    width: 130px;
    height: 100%;
    border-right: 1px solid #E9ECEF;
    box-sizing: border-box;
    line-height: 45px;
}
.HeaderItemListRemarks{
    width: 300px;
    height: 100%;
    border-right: 1px solid #E9ECEF;
    box-sizing: border-box;
    line-height: 45px;
}
.HeaderItemListDelect{
    width: 80px;
    height: 100%;
    border-right: 1px solid #E9ECEF;
    box-sizing: border-box;
    line-height: 45px;
    display: flex;
    justify-content: center;
}
.HeaderItemListDelectIcon{
    font-size: 20px;
    color: #8E9095;
    cursor: pointer;
}
</style>
<template>
  <div>
    <breadcrumb text="项目列表" />
    <el-card>
      <el-button   type="primary" icon="el-icon-plus" @click="addArticle">添加项目</el-button>
      <el-table :data="articleList">
        <el-table-column type="index" label="序号"></el-table-column>
        <el-table-column label="所属分类" border stripe>
          <template slot-scope="scope">
            <span>{{scope.row.cate.map(item => item.name).join('/')}}</span>
          </template>
        </el-table-column>
        <el-table-column width="550px" label="标题" prop="title"></el-table-column>

        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="small" type="primary" @click="edit(scope.row)">编辑</el-button>
            <el-button size="small" type="success" @click="audit(scope.row)" v-if="scope.row.audited === '0'">审核</el-button>
            <el-button size="small" type="danger" @click="_delete(scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <!-- 分页器 -->
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="pageParams.pagenum"
        :page-sizes="[5, 8, 10, 15]"
        :page-size="pageParams.pagesize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      ></el-pagination>
    </el-card>
  </div>
</template>
 
<script>

import Breadcrumb from '../../components/commom/Breadcrumb'
//导入网络请求函数
import { deleteArticle, getArticleList, updateArticle } from 'network/admin/article'

export default {
  name: "ArticleList",
  data() {
    return {
      //项目列表数据
      articleList: [],
      pageParams: {
        pagenum: 1,
        pagesize: 10
      },
      total: 0
    }
  },
  components: {
    Breadcrumb
  },
  methods: {
    //请求项目列表数据
    async getArticleList() {
      const res = await getArticleList(this.pageParams)
      this.total = res.data.total
      this.articleList = res.data.data
    },
    //监听编辑项目按钮
    async audit(row) {
      const res = await updateArticle(row._id, Object.assign({}, row, {audited: '1'}))
      if (res.data._id) {
        this.$message.success('审核成功')
        this.getArticleList()
      }
    },
    //监听编辑项目按钮
    edit(row) {
      this.$router.push(`/project/edit/${row._id}`)
    },
    //监听删除项目按钮
    async _delete(row) {
      try {

        await this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        })

        const res = await deleteArticle(row._id)
        if(!res) return
        this.$message.success('删除成功')
        this.getArticleList()

      } catch (error) {
        this.$message.info('已取消删除')
      }

    },
    // 添加项目
    addArticle() {
      this.$router.push('/project/create')
    },
    handleSizeChange(pagesize) {
      this.pageParams.pagesize = pagesize
      this.getArticleList()
    },
    handleCurrentChange(pagenum) {
      this.pageParams.pagenum = pagenum
      this.getArticleList()
    }
  },
  async created() {
    this.getArticleList()
    const res = await getArticleList()
    // console.log(res.data);
  }
}
</script>
 
<style scoped>
</style>

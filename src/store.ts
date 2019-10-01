import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // 试题说明
    testDes: [
      '该试题为基础技能评测,独立完成请勿查阅资料',
      '试题均为不定项选择题。',
      '共计30道题',
      '考试时间60分钟',
    ],

    // 题目列表
    questions: [
      {
        title: `设计测试用例的方法有很多，而且每种方法都有不同的适用条件。下
        列是对几种方法的描述：<br/>
        对于业务流清晰的系统可以利用______贯穿整个测试用例设计过程；在
        用例中综合使用各种测试方法，对于参数配置类的软件要用______选
        择较少的组合方式达到最佳效果；如果程序的功能说明中含有输入条
        件的组合情况，则一开始就可以选用______
        针对以上描述，能够按照正确的顺序填入上面空白处的选项是（）。
        `,
        list: [
          '等价类划分法、因果图法、状态图法',
          '状态图法、正交排列法、因果图法',
          '状态图法、等价类划分法、因果图法',
          '因果图法、正交排列法、等价类划分法',
        ],
        type: 'single',
        currentAnswer: ['A'],
      },
      {
        title: `某数据库中存在三个表，分别如下：<br/>
        1、学生信息表studentinfo（studentlD，studentName）<br/>
        2、考试信息表courseinfo（courselD，courseName）<br/>
        3、考生成绩表scoreinfo（studentlD，courselD，score）<br/>
        现在需要统计每门课程的平均成绩，并在列名中分别显示“课程名、平均分，”则下列的SQL语句中正确的有（）。
        `,
        list: [
          'SELECT courseinfo.courseName AS 课程名，AVG（scoreinfo.score）AS平均分FROM courseinfo，scoreinfo WHERE courseinfo.courselD=scoreinfo.courselD GROUP BY courseinfo.courseName',
          'SELECT course info.courseName AS 课程名，AVG（scoreinfo.score）AS平均分FROM courseinfo，scoreinfo WHERE courseinfo.courselD=scoreinfo.courselD GROUP BY scoreinfo.courselD',
          'SELECT courseinfo.courseName AS 课程名，AVG（scoreinfo.score）AS平均分FROM courseinfo，scoreinfo WHERE courseinfo.courselD=scoreinfo.courselD',
          'SELECT courseinfo.courseName AS 课程名，AVG（scoreinfo.score）AS平均分FROM courseinfo，courseinfo WHERE courseinfo.courselD=scoreinfo.courselD GROUP BY courseinfo.courseName，scoreinfo.courselD',
        ],
        type: 'multiple',
        currentAnswer: [],
      },
      {
        title: '下列选项中不属于数据结构测试时需要考虑的因素是（）',
        list: [
          '确定数据结构的界',
          '尝试向数据结构中输入超过界限的值',
          '查看数据定义语句是否符合编码规范',
          '除了考虑数据结构上溢外，还要针对数据结构下溢进行测试',
        ],
        type: 'single',
        currentAnswer: [],
      },
      {
        title: '关于冒烟测试，下列说法错误的是（）',
        list: [
          '冒烟测试指软件经过修改后，对其关键功能进行的测试',
          '为防止出现时间、人力的浪费，在通过冒烟测试后系统方可进入全面测试阶段',
          '进行冒烟测试时，需要返测上一版本中所有已知的缺陷',
          '冒烟测试用于确认是否需要让测试人员进入到对新版本的测试工作中',
        ],
        type: 'single',
        currentAnswer: [],
      },
      {
        title: '测试人员基于经验和直觉推测程序中所有可能存在的各种错误，从而有针对性地设计测试用例的方法是（）',
        list: [
          '等价类划分法',
          '边界值法',
          '错误猜测法',
          '因果图法',
        ],
        type: 'single',
        currentAnswer: [],
      },
      {
        title: '在某数据库中，有一张商品信息表（goods）。若要查询不同厂家（pro_name）的数量，下列sql语句中可以正确实现的是（）',
        list: [
          'SELECT SUM（DISTINCT pro_name）FROM goods',
          'SELECT COUNT（DISTINCT pro_name）FROM goods',
          'SELECT SUM（UNIQUE pro_name）FROM goods',
          'SELECT COUNT（UNIQUE pro_name）FROM goods',
        ],
        type: 'single',
        currentAnswer: [],
      },
      {
        title: '下列关于等价类划分方法的描述中错误的是（）',
        list: [
          '错误的划分等价类可能会降低执行测试用例时发现缺陷的能力',
          '为最大程度地覆盖测试，应尽可能细划等价类，不必考虑冗余',
          '划分合理的等价类中的一个测试捕获缺陷的能力与该等价类中其他测试相同',
          '根据等价类编写测试用例时，有效等价类和无效等价类都不能忽略',
        ],
        type: 'single',
        currentAnswer: [],
      },
      {
        title: `某供应商数据库中的供应关系表结构为:<br/>
        SPJ（supID（供应商号），compID（零件号），prolD（工程号），number（数量））<br/>
        使用如下命令查询某工程至少用了3家供应商（包含3家）供应的零件的平均数量，并按工程号的降序排列，则括号中应该填写（）:<br/>
        SELECT prolD.AVG（number）AS 平均数量FROM SPJ GROUP BY prolD （） ORDER BY prolD DESC`,
        list: [
          'HAVING COUNT(DISTINCT(supID))>2',
          'WHERE COUNT(supID)>2',
          'HAVING(DISTINCT(supID))>2',
          'WHERE supID>2',
        ],
        type: 'single',
        currentAnswer: [],
      },
      {
        title: `某供应商数据库中的供应关系表结构为:<br/>
        SPJ（supID（供应商号），compID（零件号），prolD（工程号），number（数量））<br/>
        使用如下命令查询某工程至少用了3家供应商（包含3家）供应的零件的平均数量，并按工程号的降序排列，则括号中应该填写（）:<br/>
        SELECT prolD.AVG（number）AS 平均数量FROM SPJ GROUP BY prolD （） ORDER BY prolD DESC`,
        list: [
          'HAVING COUNT(DISTINCT(supID))>2',
          'WHERE COUNT(supID)>2',
          'HAVING(DISTINCT(supID))>2',
          'WHERE supID>2',
        ],
        type: 'single',
        currentAnswer: [],
      },
      {
        title: '下面所描述的属于安全漏洞方面的有哪些?（）',
        list: [
          'SQL注入问题',
          '跨站脚本（XSS）',
          '不安全的加密存储，比如CSDN网站的用户密码是明文密码',
          '网站访问缓慢',
        ],
        type: 'multiple',
        currentAnswer: [],
      },
      {
        title: '下列HTTP错误代码描述正确的是：（）',
        list: [
          'HTTP502-网关错误',
          'HTTP403-禁止访问',
          'HTTP404-无法找到文件',
          'HTTP500-请求无效',
        ],
        type: 'multiple',
        currentAnswer: [],
      },
    ],
  },
  mutations: {

  },
  actions: {

  },
  getters: {
    testDes(state) {
      return state.testDes;
    },
    questions(state) {
      return state.questions;
    },
  },
});

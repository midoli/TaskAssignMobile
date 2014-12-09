Ext.define('GeoCon.model.MyTask', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
        'TaskID',
        'Title', //���D
        'Desc', //�u�@�y�z
        'Type',//�u�@���O
        'TaskTypeName', //dis_�u�@���O
        'TaskSource',//�Ӧ�
        'TaskSourceName', //dis_�Ӧ�
        'Priority', //���n��
        'PriorityTypeName', //dis_���n��
        'Owner', //�����H
        'str_Owner', //dis_�����H
        'AssignTo', //�t�d�H                                     
        'str_AssignTo', //dis_�t�d�H
        'Assist', //���
        'str_Assist', //dis_���
        'CCTo', //�ƥ����|
        'str_CCTo', //dis_�ƥ����|                                    
        'ProcessTypeName', //dis_�u�@�i��
        'Process', //�u�@�i��
        'TaskStatustTypeName', //dis_�u�@���A
        'TaskStatus', //�u�@���A
        'StartDate', //�_�l��
        'DueDate', //�����
        'str_StartDate', //dis_�_�l��
        'str_DueDate', //dis_�����
        'TaskStatustTypeName_v2', //�u�@���A+�u�@�i��
        'OverTime', //�O�_�O��
        'IsClose', //�O�_����
        'IsRead', //�O�_�w�\Ū�LTASK or Commands
        'ModifyDate' //�ק��
      ]
    }
});

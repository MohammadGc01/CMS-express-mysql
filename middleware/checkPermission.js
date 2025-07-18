const Permission = require("../constants/Permission");

async function checkPermission(roleArray, PermissionsRequire) {
  if (!Array.isArray(roleArray)) {
    return false; // یا throw new Error("Invalid role array");
  }

  const roleIds = roleArray.map(role => role.id);
  const placeholders = roleIds.map(() => '?').join(',');

  const rows = await new Promise((resolve, reject) => {
    db.query(`
        SELECT DISTINCT permission_name
        FROM role_permission
        WHERE role_id IN (${placeholders})
      `, roleIds, (err, result) => {
        if (err) return reject(err);
        resolve(result);
      });
  });

  const permissions = rows.map(r => r.permission_name);
  
  if (permissions.includes(Permission.ADMINISTRATOR)) {
    return true;
  }

  return permissions.includes(PermissionsRequire);
}

module.exports = {
  checkPermission
}